<?php

namespace App\Controller\Api;

use App\Entity\Skill;
use App\Repository\SkillRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    #[Route('/api/skills/knowledge/{knowledge}', name: 'api_skills_get_item', methods:'GET')]
    public function getItem(SkillRepository $skillRepository, Request $request): Response
    {
        $knowledge = $request->get('knowledge');
        $skills = $skillRepository->findBy(['knowledge' => $knowledge]);
        return $this->json([$skills], Response::HTTP_OK, [], ['groups' => 'skills_get']);
    }

    #[Route('/api/skills/type/{type}', name: 'api_skills_get_item_type', methods:'GET')]
    public function getItemType(SkillRepository $skillRepository, Request $request): Response
    {
        $type = $request->get('type');
        $skills = $skillRepository->findBy(['type' => $type]);
        return $this->json([$skills], Response::HTTP_OK, [], ['groups' => 'skills_get']);
    }
}
