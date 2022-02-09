<?php

namespace App\Controller\Api;

use App\Repository\ProjectRepository;
use App\Repository\SkillRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AllController extends AbstractController
{
    #[Route('/api/all', name: 'api_all')]
    public function getAllCollections(UserRepository $userRepository, ProjectRepository $projectRepository, SkillRepository $skillRepository): Response
    {
        $users = $userRepository->findBy(['id' => 1]);
        $projects = $projectRepository->findAll();
        return $this->json(
            [
                'user' => $users,
                'projects' => $projects
            ],
            Response::HTTP_OK,
            [],
            ['groups' => 'all_get']
        );
    }
}
