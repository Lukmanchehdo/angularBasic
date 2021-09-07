<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Clas;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function index()
    {
        $class = Clas::orderBy('id', 'ASC')->get();
        return response()->json([
            'class' => $class,
            'status' => 'OK',
        ]);
    }

    public function save(Request $request)
    {

        // dd($request);
        $class = new Clas;

        $class->name = $request->name;
        $class->level = $request->level;

        $class->save();

        return response()->json([
            'class_data' => $class,
            'message' => 'Data Insert Successfully',
        ]);

    }

    public function update(Request $request)
    {

        // dd($request);
        $class = clas::find($request->id);

        $class->name = $request->name;
        $class->level = $request->level;

        $class->save();

        return response()->json([
            'class_data' => $class,
            'message' => 'Data Update Successfully',
        ]);

    }

    public function delete($id)
    {

        $class = clas::find($id)->delete();

        return response()->json([
            'class_data' => $class,
            'message' => 'Data Delete Successfully',
        ]);

    }
}
