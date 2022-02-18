<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            EmailField::new('email'),
            Field::new('password')->hideOnForm()->hideOnIndex(),
            ChoiceField::new('roles')->setChoices(['Administrateur' => 'ROLE_ADMIN'])->allowMultipleChoices(),
            Field::new('firstname'),
            Field::new('lastname'),
            UrlField::new('picture'),
            Field::new('title'),
            TextareaField::new('description'),
            TextareaField::new('about'),
            AssociationField::new('skills'),
            UrlField::new('link_github'),
            UrlField::new('link_linkedin'),
            UrlField::new('link_twitter'),
        ];
    }
    
}

