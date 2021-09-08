<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $student = Student::find($request->id);

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

    public function student()
    {
        $data = [];

        $condition = DB::table('classrooms')->select('classrooms.*')->get();

        foreach ($condition as $conditions) {
            $data[] = [
                $conditions->student_id,
            ];

        }

        $student = Student::orderBy('id', 'ASC')->whereNotIn('id', $data)->get();

        return response()->json([
            'student' => $student,
            'status' => 'OK',
        ]);
    }
}
