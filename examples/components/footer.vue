<template>
    <footer class="footer">
        <div class="container">
            Ruipeng UI {{ version && version }}
            <!-- <div class="footer-main">
                <h4>{{ langConfig.links }}</h4>
            </div>
            <div class="footer-main">
                <h4>{{ langConfig.community }}</h4>
            </div> -->
            <!-- <div class="footer-social">
                <p class="footer-social-title">Ruipeng UI {{ version && version }}</p>
            </div> -->
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    background-color: #f7fbfd;
    height: 120px;
    width: 100%;
    padding: 40px 150px;
    box-sizing: border-box;
    margin-top: -120px;

    .container {
        box-sizing: border-box;
        width: auto;
    }

    .footer-main {
        font-size: 0;
        display: inline-block;
        vertical-align: top;
        margin-right: 110px;

        h4 {
            font-size: 18px;
            color: #333;
            line-height: 1;
            margin: 0 0 15px 0;
        }

        .footer-main-link {
            display: block;
            margin: 0;
            line-height: 2;
            font-size: 14px;
            color: #666;

            &:hover {
                color: #333;
            }
        }
    }

    .footer-social {
        float: right;
        text-align: right;

        .footer-social-title {
            color: #666;
            font-size: 18px;
            line-height: 1;
            margin: 0 0 20px 0;
            padding: 0;
            font-weight: bold;
        }

        .ruipengdoc {
            transition: 0.3s;
            display: inline-block;
            line-height: 32px;
            text-align: center;
            color: #c8d6e8;
            background-color: transparent;
            size: 32px;
            font-size: 32px;
            vertical-align: middle;
            margin-right: 20px;
            &:hover {
                transform: scale(1.2);
                color: #8d99ab;
            }
        }

        .doc-icon-gitter {
            margin-right: 0;
        }
    }
}

.rp-popover.footer-popover {
    padding: 0;
    min-width: 120px;
    line-height: normal;
    box-shadow: 0 0 11px 0 rgba(174, 187, 211, 0.24);

    .footer-popover-title {
        border-bottom: solid 1px #eaeefb;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #99a9bf;
        background-color: #f8f9fe;
    }

    img {
        size: 100px;
        margin: 10px;
    }
}
@media (max-width: 1140px) {
    .footer {
        height: auto;
    }
}

@media (max-width: 1000px) {
    .footer-social {
        display: none;
    }
}

@media (max-width: 768px) {
    .footer {
        .footer-main {
            margin-bottom: 30px;
        }
    }
}
</style>

<script type="text/babel">
import compoLang from '../i18n/component.json'
import Ruipeng from 'main/index.js'
const { version } = Ruipeng

export default {
    data() {
        return {
            version
        }
    },

    computed: {
        lang() {
            return this.$route.path.split('/')[1] || 'zh-CN'
        },

        langConfig() {
            return compoLang.filter(config => config.lang === this.lang)[0]['footer']
        }
    }
}
</script>
