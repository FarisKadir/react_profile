import React from 'react';

export class Footer extends React.Component{


    render()    {
        return (
            <footer class="page-footer blue-grey darken-3">
                <div>
                    <div class="row">
                        <div class="col s1 m1 l3 xl3 left"></div>
                        <div class="col s11 m11 l9 xl9 right">
                            <div class="row">
                                <span>
                                    <a class="right btn waves-effect waves-light grey-text text-lighten-3" href="./assets/docs/Faris_Kadir_Resume.pdf" download><i class="fas fa-file"> Resume</i></a>
                                </span>   
                                <span>
                                    <a rel="noreferrer noopener" class="right btn waves-effect waves-light grey-text text-lighten-3" href="https://github.com/FarisKadir" target="_blank"><i class="fab fa-github-square fa-4x"></i></a>
                                </span>
                                <span>
                                    <a rel="noreferrer noopener" class="right btn waves-effect waves-light grey-text text-lighten-3" href="https://www.linkedin.com/in/faris-kadir-05966691/" target="_blank"><i class="fab fa-linkedin fa-4x"></i></a>
                                </span>
                                <span>
                                    <a class="right btn waves-effect waves-light grey-text text-lighten-3" href="mailto: faris.kadir@gmail.com"><i class="fas fa-envelope-square fa-4x"></i></a>
                                </span>
                                <span>
                                    <a class="right btn waves-effect waves-light grey-text text-lighten-3" href="tel: 407-900-5923"><i class="fas fa-phone-square fa-4x"></i></a>
                                </span>        
                            </div>
                        </div>     
                    </div>
                </div>
            </footer>
        )
    }
};