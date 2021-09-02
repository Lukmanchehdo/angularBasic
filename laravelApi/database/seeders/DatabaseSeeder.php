<?php

namespace Database\Seeders;

use Database\Seeders\StudentSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            StudentSeeder::class,
        ]);
        \App\Models\Student::factory(50)->create();
    }
}
