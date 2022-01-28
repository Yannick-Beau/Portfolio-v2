<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/api/users', name: 'api_user_get', methods: 'GET')]
    public function getCollection(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();
        return $this->json(
            [$users],
            Response::HTTP_OK,
            [],
            ['groups' => 'users_get']
        );
    }

}
