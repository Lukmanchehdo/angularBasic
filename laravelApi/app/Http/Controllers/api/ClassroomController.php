<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClassroomController extends Controller
{
    public function save(Request $request)
    {

        $classroom = new Classroom;

        $classroom->student_id = $request->student_id;
        $classroom->class_id = $request->class_id;

        $classroom->save();

        return response()->json([
            'classroom_data' => $classroom,
            'message' => 'Classroom saved successfully',
        ]);
    }

    public function index()
    {
        $data = [];

        $classrooms = DB::table('classrooms')
            ->join('clas', 'clas.id', 'classrooms.class_id')
            ->select('classrooms.class_id', 'clas.name as class_name')
            ->groupBy('clas.name', 'classrooms.class_id')
            ->get();

        foreach ($classrooms as $classroom) {
            $data[] = [
                'classroom_data' => $classroom->class_name,
                'student_data' => DB::table('students')->join('classrooms', 'classrooms.student_id', 'students.id')->select('students.*')->where('classrooms.class_id', $classroom->class_id)->get(),
            ];

        }

        return response()->json($data);
    }

    public function delete($id)
    {
        //dd($id);

        $classroom = Classroom::where('student_id', $id)->delete();

        return response()->json([
            'data' => $classroom,
            'message' => 'Data Delete Successfully',
        ]);

    }
}
