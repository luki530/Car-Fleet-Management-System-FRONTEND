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
                    <a href="index.html" data-type="index-link">car-fleet-management-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
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
                                <a href="modules/AppMaterialModule.html" data-type="entity-link">AppMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' : 'data-target="#xs-components-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' :
                                            'id="xs-components-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddCarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddCarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddLoggerDeviceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddLoggerDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignLoggerDeviceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssignLoggerDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignRolesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssignRolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarLogsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarLogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmPhoneNumberComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmPhoneNumberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteAccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteAccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteCarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteCarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteLoggerDeviceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteLoggerDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListOfUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListOfUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoggerDeviceDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoggerDeviceDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoutPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' : 'data-target="#xs-injectables-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' :
                                        'id="xs-injectables-links-module-AppModule-841f4bd61c968c20a361b57ddd469418"' }>
                                        <li class="link">
                                            <a href="injectables/ConnectionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConnectionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StyleManagerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StyleManagerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarsComponent.html" data-type="entity-link">CarsComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConnectionService.html" data-type="entity-link">ConnectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListOfUsersComponent.html" data-type="entity-link">ListOfUsersComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StyleManagerService.html" data-type="entity-link">StyleManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenStorageService.html" data-type="entity-link">TokenStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileComponent.html" data-type="entity-link">UserProfileComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Option.html" data-type="entity-link">Option</a>
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
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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