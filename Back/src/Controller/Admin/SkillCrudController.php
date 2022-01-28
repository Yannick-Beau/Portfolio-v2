<?php

namespace App\Controller\Admin;

use App\Entity\Skill;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SkillCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Skill::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            Field::new('name'),
            UrlField::new('picture'),
            ChoiceField::new('type')->setChoices([
                'Back' => 'back',
                'Front' => 'front',
                'Back and Front' => 'back_front',
                'Software' => 'software',
                'Other' => 'other',
            ]),
            ChoiceField::new('knowledge')->setChoices([
                'know' => 'know',
                'coming' => 'coming',
                'learning' => 'learning',
                'use' => 'use',
            ]),
        ];
    }
}
