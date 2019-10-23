'use strict';
const colors = {
    black: '#000000',
    red: '#ff5370',
    orange: '#f78c6c',
    yellow: '#ffcb6b',
    green: '#c3e88d',
    darkerGreen: '#91b65e',
    blue: '#82aaff',
    purple: '#c792ea',
    darkerPurple: '#9563b7',
    gray: '#848484',

    background: '#212121',
    darkerBackground: '#1a1a1a',
    foreground: '#eeffff',
    selection: 'rgba(97, 97, 97, 0.5)'
};

// establish a baseline
const base = {
    name: 'material-darker-hc',
    displayName: 'Material Darker (HC)',
    theme: {
        rawCss: `.CodeMirror-activeline-background,.CodeMirror-gutter-background {
            background-color: ${colors.background} !important; }`,
        background: {
            default: colors.background,
            success: colors.green,
            notice: colors.yellow,
            warning: colors.orange,
            danger: colors.red,
            surprise: colors.purple,
            info: colors.blue
        },
        foreground: {
            default: colors.foreground,
            success: colors.foreground,
            notice: colors.foreground,
            warning: colors.foreground,
            danger: colors.foreground,
            surprise: colors.foreground,
            info: colors.foreground
        },
        highlight: {
            // controls text color when no other colors apply. (tab labels, timeline, side bar labels)
            default: colors.gray,

            // text box backgrounds, and tab exponent borders
            xxs: colors.selection,

            // background for side bar selections, scroll bars, keyboard shortcuts
            xs: colors.selection,

            // foreground and border for inactive tab exponents, pane header info boxes (time, size),
            // popup menu borders, and popup menu hovers
            sm: colors.selection,

            // borders around any user-input area (text boxes, drop downs, tabs, etc.), also used
            // as a background when a user clicks on a control (like tabs or popup menu entries)
            md: colors.selection,

            // code folding arrows. text hints inside text boxes.  separator lines on popup menus
            // border around some buttons on the preferences menu.
            lg: colors.gray,

            // line numbers in the editor, keyboard shortcuts shown on popup menus,
            xl: colors.gray
        },
        styles: {}
    }
};

// hyperlinks
base.theme.styles.link = {
    foreground: {
        default: colors.purple
    }
};

// side bar
base.theme.styles.sidebar = {
    background: {
        default: colors.darkerBackground
    }
};
base.theme.styles.sidebarHeader = {
    background: {
        default: colors.darkerPurple
    },
    highlight: {
        default: colors.darkerPurple,
        xs: colors.darkerPurple, // hover
        md: colors.darkerPurple // bars and click
    }
};

// header bar above request details
base.theme.styles.paneHeader = {
    background: {
        success: colors.darkerGreen, // darken this from "#c3e88d" to make white text more legible.
        notice: colors.yellow,
        warning: colors.orange,
        danger: colors.red,
        surprise: colors.purple,
        info: colors.blue
    }
};

// an overlay that is placed on top of everything when modal dialogs are opened.
base.theme.styles.transparentOverlay = {
    background: {
        default: colors.selection
    }
};

module.exports.themes = [base];
