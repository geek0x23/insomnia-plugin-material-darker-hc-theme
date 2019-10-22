'use strict';
module.exports.themes = [
    {
        name: 'material-darker-hc',
        displayName: 'Material Darker (HC)',
        theme: {
            background: {
                default: '#212121',
                success: '#c3e88d',
                notice: '#ffcb6b',
                warning: '#ffb86c',
                danger: '#f78c6c',
                surprise: '#c792ea',
                info: '#82aaff'
            },
            foreground: {
                default: '#eeffff',
                success: '#eeffff',
                notice: '#eeffff',
                warning: '#eeffff',
                danger: '#eeffff',
                surprise: '#eeffff',
                info: '#eeffff'
            },
            highlight: {
                default: 'rgba(97, 97, 97, 1)',
                xxs: 'rgba(97, 97, 97, 0.5)',
                xs: 'rgba(97, 97, 97, 0.5)',
                sm: 'rgba(97, 97, 97, 0.5)',
                md: 'rgba(97, 97, 97, 0.5)',
                lg: 'rgba(97, 97, 97, 1)',
                xl: 'rgba(97, 97, 97, 1)'
            },
            styles: {
                link: {
                    foreground: {
                        default: '#c792ea'
                    }
                },
                sidebar: {
                    background: {
                        default: '#1a1a1a'
                    }
                },
                sidebarHeader: {
                    background: {
                        default: '#9563b7'
                    },
                    highlight: {
                        default: '#9563b7',
                        xs: '#9563b7', // hover
                        md: '#9563b7' // bars and click
                    }
                },
                dialog: {
                    background: {
                        default: '#212121'
                    }
                },
                paneHeader: {
                    background: {
                        success: '#91b65e', // darken this from "#c3e88d" to make white text more legible.
                        notice: '#ffcb6b',
                        warning: '#ffb86c',
                        danger: '#f78c6c',
                        surprise: '#c792ea',
                        info: '#82aaff'
                    }
                },
                transparentOverlay: {
                    background: {
                        default: 'rgba(66, 66, 66, 0.5)'
                    }
                }
            }
        }
    }
];
