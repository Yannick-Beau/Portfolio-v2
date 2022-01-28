<?php

namespace App\Controller\Api;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    #[Route('/api/projects', name: 'api_projects_get', methods: 'GET')]
    public function getCollection(ProjectRepository $projectRepository): Response
    {
        $projects = $projectRepository->findAll();
        return $this->json(
            [$projects],
            Response::HTTP_OK,
            [],
            ['groups' => 'projects_get']
        );
    }
}
