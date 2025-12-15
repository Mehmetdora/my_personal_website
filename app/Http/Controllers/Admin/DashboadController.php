<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboadController extends Controller
{


    // İlk girilince gösterilecek içerikler
    public function anasayfa()
    {

        $profil_infos = [
            "name" => "Mehmet",
            "surname" => "Dora",
        ];

        $info = "Anasayfa";

        return Inertia::render("Anasayfa", [
            "profile_infos" => $profil_infos,
            "info" => $info,
        ]);
    }

    public function projeler()
    {
        $profil_infos = [
            "name" => "Mehmet",
            "surname" => "Dora",
        ];

        $info = "Projeler";

        return Inertia::render("Projeler", [
            "profile_infos" => $profil_infos,
            "info" => $info,
        ]);
    }
    public function yazilarim()
    {
        $profil_infos = [
            "name" => "Mehmet",
            "surname" => "Dora",
        ];

        $info = "Yazılarım";

        return Inertia::render("Yazilarim", [
            "profile_infos" => $profil_infos,
            "info" => $info,
        ]);
    }
    public function hakkimda()
    {
        $profil_infos = [
            "name" => "Mehmet",
            "surname" => "Dora",
        ];

        $info = "Hakkımda";

        return Inertia::render("Hakkimda", [
            "profile_infos" => $profil_infos,
            "info" => $info,
        ]);
    }
    public function iletisim()
    {
        $profil_infos = [
            "name" => "Mehmet",
            "surname" => "Dora",
        ];

        $info = "İletişim";

        return Inertia::render("Iletisim", [
            "profile_infos" => $profil_infos,
            "info" => $info,
        ]);
    }
}
