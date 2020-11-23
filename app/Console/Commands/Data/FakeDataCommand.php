<?php

namespace App\Console\Commands\Data;

use App\Models\Article;
use App\Models\Menu;
use App\Models\User;
use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class FakeDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'data:fake';
    protected $path;
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fake data';
    protected $faker;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->faker = Factory::create();
        $this->setPath();
    }

    protected function setPath()
    {
        $this->path = $path = public_path() . '/uploads/' . date('Y/m/d');
        if (!\File::exists($this->path)) mkdir($this->path, 0777, true);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->fakeMenu();
        $this->fakeUser();
        $this->fakeArticles();
    }


    protected function fakeMenu()
    {
        $menus = [
            [
                'name'        => 'Php cơ bản',
                'description' => 'Học lập trình PHP cơ bản'
            ],
            [
                'name'        => 'Vuejs',
                'description' => 'Học vuejs'
            ],
            [
                'name'        => 'Khoá học',
                'description' => 'Danh sách khoá học lập trình'
            ],
            [
                'name'        => 'Tin tuyển dụng',
                'description' => 'Thông tin tuyển dụng'
            ],
            [
                'name'        => 'Laravel',
                'description' => 'Tổng hợp các bài chia sẻ laravel'
            ]
        ];
        foreach ($menus as $menu) {
            try {
                $this->info("-- " . $menu['name']);
                Menu::insert([
                    'm_name'        => $menu['name'],
                    'm_slug'        => Str::slug($menu['name']),
                    'm_description' => $menu['description'],
                    'created_at'    => Carbon::now()
                ]);
            } catch (\Exception $exception) {

            }
        }
    }

    protected function fakeUser()
    {
        try {
            User::create([
                'name'       => 'TrungPhuNA',
                'email'      => 'codethue94@gmail.com',
                'password'   => bcrypt('123456789'),
                'created_at' => Carbon::now()
            ]);

            User::create([
                'name'       => 'BichNgoc',
                'email'      => 'ngocnb@gmail.com',
                'password'   => bcrypt('123456789'),
                'created_at' => Carbon::now()
            ]);
        } catch (\Exception $exception) {

        }
    }

    protected function fakeArticles()
    {
        for ($i = 1; $i <= 2000; $i++) {
            $name = $this->faker->name;
            try {
                $avatar = $this->faker->image($this->path, 265, 160, null, false);
                rename($this->path . '/' . $avatar, $this->path . '/' . date('Y-m-d') . "__" . $avatar);
                $newAvatar = date('Y-m-d') . "__" . $avatar;

                $this->info("-- " . $name);
                Article::insert([
                    'a_name'          => $name,
                    'a_slug'          => Str::slug($name),
                    'a_menu_id'       => Menu::inRandomOrder()->first()->id,
                    'a_description'   => $this->faker->text(180),
                    'a_content'       => $this->faker->paragraph(mt_rand(6, 500)),
                    'a_user_id'       => 1,
                    'a_position'      => rand(0, 1),
                    'a_avatar'        => $newAvatar,
                    'created_at'      => Carbon::now(),
                    'a_total_comment' => rand(1, 100)
                ]);
            } catch (\Exception $exception) {

            }
        }
    }
}
