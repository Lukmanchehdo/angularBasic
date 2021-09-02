<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {

        $student = Student::all();
        return response()->json([
            'student' => $student,
            'status' => 'OK',
        ]);
    }
}
