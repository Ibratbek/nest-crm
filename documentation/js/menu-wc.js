'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-typescript-starter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' : 'data-target="#xs-controllers-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' :
                                            'id="xs-controllers-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' : 'data-target="#xs-injectables-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' :
                                        'id="xs-injectables-links-module-AppModule-92a6a17e0654a331ff7d4682eb197ab777d30d292dc8d7c4c2420fde4dc90f10b3cce3522a6ed0c92da51db7fb03044c0b327c93172771401eb96c4eecb1b35d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupsModule.html" data-type="entity-link" >GroupsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' : 'data-target="#xs-controllers-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' :
                                            'id="xs-controllers-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' }>
                                            <li class="link">
                                                <a href="controllers/GroupsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' : 'data-target="#xs-injectables-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' :
                                        'id="xs-injectables-links-module-GroupsModule-4de9473f0aeb2d38d8b002adf17343dd04b708e7f994b8684500b2d3a1f2730a324052c48287d225ba5b89f1e5ef1efdd7517377bef4c9b0d2e782b22cb08b23"' }>
                                        <li class="link">
                                            <a href="injectables/GroupsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarksModule.html" data-type="entity-link" >MarksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' : 'data-target="#xs-controllers-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' :
                                            'id="xs-controllers-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' }>
                                            <li class="link">
                                                <a href="controllers/MarksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' : 'data-target="#xs-injectables-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' :
                                        'id="xs-injectables-links-module-MarksModule-74f180b23004f132e92c37a184b11a35cab1ac383fab84f2fa8954760e33ce3be6df2cfc293ff6b3941a65de267b75dabe7205586d2779b1613de0960357d427"' }>
                                        <li class="link">
                                            <a href="injectables/MarksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsModule.html" data-type="entity-link" >StudentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' : 'data-target="#xs-controllers-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' :
                                            'id="xs-controllers-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' }>
                                            <li class="link">
                                                <a href="controllers/StudentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' : 'data-target="#xs-injectables-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' :
                                        'id="xs-injectables-links-module-StudentsModule-28c3121b2e21410794f40d151dbad02539e9ded4d6c6bf08517e77193f068cafcb5ce0336176a1c6f998cdb39e453fad4de4e888cf80872bc7b8b290afd397aa"' }>
                                        <li class="link">
                                            <a href="injectables/StudentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectsModule.html" data-type="entity-link" >SubjectsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' : 'data-target="#xs-controllers-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' :
                                            'id="xs-controllers-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' }>
                                            <li class="link">
                                                <a href="controllers/SubjectsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' : 'data-target="#xs-injectables-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' :
                                        'id="xs-injectables-links-module-SubjectsModule-a2565626b9ecc3d53a363cbfe8bbdf570be968830efd5e84a5abc110978b08e53f8714d1c954e1d793b12790b54c9420db57647ebc09bd1845ead6a1e8b536f7"' }>
                                        <li class="link">
                                            <a href="injectables/SubjectsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectTeacherModule.html" data-type="entity-link" >SubjectTeacherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' : 'data-target="#xs-controllers-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' :
                                            'id="xs-controllers-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' }>
                                            <li class="link">
                                                <a href="controllers/SubjectTeacherController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectTeacherController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' : 'data-target="#xs-injectables-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' :
                                        'id="xs-injectables-links-module-SubjectTeacherModule-72a87fa5588656481bf4d49ec87b6a75b1a21c38fb5d332f9054e0cd57b5ed0f02ae254660521d7fcaf5fe50a003a9e7507547ef42e743da38d832b4892c3781"' }>
                                        <li class="link">
                                            <a href="injectables/SubjectTeacherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectTeacherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeachersModule.html" data-type="entity-link" >TeachersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' : 'data-target="#xs-controllers-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' :
                                            'id="xs-controllers-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' }>
                                            <li class="link">
                                                <a href="controllers/TeachersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeachersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' : 'data-target="#xs-injectables-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' :
                                        'id="xs-injectables-links-module-TeachersModule-6990241d71775a3cb77e2a72baeaf22f6f490d675380068a907e0fee464daabbd89c7f3cff2559c3b731f3347fc654fc180577e38ab435f3c3280db9df8f9676"' }>
                                        <li class="link">
                                            <a href="injectables/TeachersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeachersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Group.html" data-type="entity-link" >Group</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Mark.html" data-type="entity-link" >Mark</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Student.html" data-type="entity-link" >Student</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Subject.html" data-type="entity-link" >Subject</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SubjectTeacher.html" data-type="entity-link" >SubjectTeacher</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Teacher.html" data-type="entity-link" >Teacher</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateGroupDTO.html" data-type="entity-link" >CreateGroupDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMarkDTO.html" data-type="entity-link" >CreateMarkDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStudentDTO.html" data-type="entity-link" >CreateStudentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubjectDTO.html" data-type="entity-link" >CreateSubjectDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeacherDTO.html" data-type="entity-link" >CreateTeacherDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GroupDTO.html" data-type="entity-link" >GroupDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/MarkDTO.html" data-type="entity-link" >MarkDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentDTO.html" data-type="entity-link" >StudentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubjectDTO.html" data-type="entity-link" >SubjectDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeacherDTO.html" data-type="entity-link" >TeacherDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGroupDTO.html" data-type="entity-link" >UpdateGroupDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMarkDTO.html" data-type="entity-link" >UpdateMarkDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStudentDTO.html" data-type="entity-link" >UpdateStudentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubjectDTO.html" data-type="entity-link" >UpdateSubjectDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeacherDTO.html" data-type="entity-link" >UpdateTeacherDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});