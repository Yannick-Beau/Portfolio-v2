<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    #[Route('/api/users/{id<\d+>}', name: 'api_users_get_item', methods:'GET')]
    public function getItem(User $user): Response
    {
        // /!\ JSON Hijacking
        // @see https://symfony.com/doc/current/components/http_foundation.html#creating-a-json-response
        return $this->json($user, Response::HTTP_OK, [], ['groups' => 'users_get']);
    }

}
