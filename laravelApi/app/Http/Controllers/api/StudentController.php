<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {

        $student = Student::orderBy('id', 'ASC')->get();
        return response()->json([
            'student' => $student,
            'status' => 'OK',
        ]);
    }

    public function save(Request $request)
    {

        // dd($request);
        $student = new Student;

        $student->name = $request->name;
        $student->email = $request->email;
        $student->mobile = $request->email;
        $student->age = $request->age;
        $student->gender = $request->gender;
        $student->address_info = $request->address_info;

        $student->save();

        return response()->json([
            'student_data' => $student,
            'message' => 'Data Insert Successfully',
        ]);

    }

    public function update(Request $request)
    {

        // dd($request);
        $student = Student::findOrFail($request->id);

        $student->name = $request->name;
        $student->email = $request->email;
        $student->mobile = $request->mobile;
        $student->age = $request->age;
        $student->gender = $request->gender;
        $student->address_info = $request->address_info;

        $student->save();

        return response()->json([
            'student_data' => $student,
            'message' => 'Data Update Successfully',
        ]);

    }

    public function delete(Request $request)
    {

        // dd($request);
        $student = Student::find($request->id)->delete();

        return response()->json([
            'student_data' => $student,
            'message' => 'Data Delete Successfully',
        ]);

    }
}
