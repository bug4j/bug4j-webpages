<template>
    <header ref="headerRef" id="sticky-header" class="header-fixed header-transparent">
        <div class="header-area">
            <div class="container sm-100">
                <div class="row">
                    <div class="col-md-3 col-sm-2">
                        <HeaderLogo />
                    </div>
                    <div class="col-md-9 col-sm-10">
                        <Menu :items="menuItems" @menu-clicked="onMenuClicked" />
                        <MobileMenu :items="menuItems" @menu-clicked="onMenuClicked"></MobileMenu>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderLogo from '@/views/home/components/HeaderLogo.vue';
import Menu from './Menu.vue';
import menus, { navMenu } from '../Menus';
import MobileMenu from './MobileMenu.vue';
import { MenuActionType, MenuItemType } from '../../../entity/MenuTypes';
const menuItems = reactive(menus);
const headerRef = ref<HTMLElement>(null as unknown as HTMLElement);
window.addEventListener("scroll", e => {
    console.log(e)
    if(window.scrollY > 1) {
        !headerRef.value.classList.contains('sticky') && headerRef.value.classList.add('sticky');
    } else {
        headerRef.value.classList.remove('sticky');
    }
});

const $router = useRouter();
function onMenuClicked(menu:MenuItemType) {
  return navMenu(menu, $router);
  if(menu.type === MenuActionType.ROUTER) {
    $router.push({ path:menu.action });
  } else if(menu.type === MenuActionType.LINK) {
    window.open(menu.action);
  }
}
</script>

<style lang="less">
.header-fixed {
    left: 0;
    position: absolute;
    right: 0;
    z-index: 1030;
}
.header-transparent {
    background: transparent none repeat scroll 0 0;
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
    transition: height 0.3s ease-out 0s, background 0.3s ease-out 0s,
        box-shadow 0s ease-out 0s;
    .logo {
        h4 {
            color: #fff;
        }
    }
    .basic-menu {
        li {
            a {
                color: #fff;
            }
        }
        & > li {
            & > a {
                &::before {
                    background: #f6f6f6 none repeat scroll 0 0;
                }
            }
        }
    }
    &.sticky {
        .basic-menu {
            & > li {
                & > a {
                    color: #232332;
                    &::before {
                        background: #666 none repeat scroll 0 0;
                    }
                }
            }
        }
    }
}
.sticky {
    left: 0;
    margin: auto;
    position: fixed;
    top: 0;
    width: 100%;
    background: #ffffff none repeat scroll 0 0;
    box-shadow: 0 -1px 0 #f5f5f5 inset;
    transition: height 0.3s ease-out 0s, background 0.3s ease-out 0s,
        box-shadow 0.3s ease-out 0s;
    z-index: 1030;
    .logo {
        padding: 19px 0;
        h4 {
            color: #222;
        }
    }
    .basic-menu {
        & > li {
            & > a {
                padding: 23px 0;
                &::before {
                    bottom: 17px;
                }
            }
            &::after {
                top: 25px;
            }
        }
    }
    .hamburger {
        margin-top: 17px;
    }
}
.menu-area {
.menu-p-right {
    ul {
    left: auto;
    right: 0;
    }
}
}
  .basic-menu {
    float: right;
    li {
      float: left;
      margin-left: 30px;
      position: relative;
      transition: all 0.3s ease 0s;
      a {
        color: #232332;
        display: inline-block;
        text-transform: uppercase;
        position: relative;
        font-size: 12px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      &:hover {
        & > a {
          color: #999;
          &:before {
            opacity: 1;
            width: 15px;
          }
        }
        & > ul {
          opacity: 1;
          top: 100%;
          visibility: visible;
        }
      }
      ul {
        background: #222 none repeat scroll 0 0;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);
        float: none;
        left: 0;
        opacity: 0;
        position: absolute;
        text-align: left;
        top: 110%;
        transition: all 0.3s ease 0s;
        visibility: hidden;
        width: 200px;
        z-index: 11;
        li {
          border-bottom: 1px solid rgba(51, 51, 51, 0.5);
          display: block;
          float: none;
          margin: 0;
          &:last-child {
            border-bottom: 0 none;
            margin: 0;
          }
          a {
            color: rgba(255, 255, 255, 0.7);
            display: block;
            font-size: 11px;
            padding: 10px 15px;
            i {
              float: right;
            }
            span {
              float: right;
            }
          }
          ul {
            left: 100%;
            opacity: 0;
            position: absolute;
            top: 10%;
            visibility: hidden;
            z-index: 999;
          }
          &:hover {
            & > ul {
              opacity: 1;
              top: 0;
              visibility: visible;
            }
            & > a {
              background: rgba(51, 51, 51, 0.5) none repeat scroll 0 0;
              color: #fff;
            }
          }
        }
      }
    }
    & > li {
      &:last-child {
        &:after {
          display: none;
        }
      }
      & > a {
        padding: 30px 0;
        &::before {
          background: #666666 none repeat scroll 0 0;
          bottom: 23px;
          content: "";
          height: 1px;
          left: 0;
          margin: auto;
          opacity: 0;
          position: absolute;
          right: 0;
          transition: all 0.3s ease 0s;
          width: 0px;
        }
      }
    }
    .menu-p-right {
      ul {
        li {
          ul {
            right: 100%;
          }
        }
      }
    }
  }
</style>