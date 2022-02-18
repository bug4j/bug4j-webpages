<template>
    <footer>
        <div class="basic-footer text-center ptb-90">
            <div class="container">
                <div class="footer-logo mb-30">
                    <h3><a href="">BUG4J</a></h3>
                </div>
                <div class="social-icon">
                    <a href="#"><i class="ion-social-facebook"></i></a>
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-instagram"></i></a>
                    <a href="#"><i class="ion-social-dribbble"></i></a>
                </div>
                <div class="footer-menu mt-30">
                    <nav>
                        <ul>
                            <li v-for="menu in navMenus" :key="menu.action"><a href="#">{{ menu.title }}</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="copyright mt-20">
                    <p>Copyright &copy; 2022.All rights reserved.<a target="_blank" href="https://sc.chinaz.com/moban/"></a></p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import menus from '../Menus';
import { reactive } from 'vue';
const navMenus = reactive(menus);
</script>