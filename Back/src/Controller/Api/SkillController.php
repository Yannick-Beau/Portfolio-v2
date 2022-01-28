<?php

namespace App\Controller\Api;

use App\Entity\Skill;
use App\Repository\SkillRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SkillController extends AbstractController
{
    #[Route('/api/skills', name: 'api_skills_get', methods: 'GET')]
    public function getCollection(SkillRepository $skillRepository): Response
    {
        $skills = $skillRepository->findAll();
        return $this->json(
            [$skills],
            Response::HTTP_OK,
            [],
            ['groups' => 'skills_get']
        );
    }
}
