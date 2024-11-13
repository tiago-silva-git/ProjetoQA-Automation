const locators = {
    LOGIN: {
        EMAIL_ADDRESS: '#email',
        PASSWORD: '#passwd',
        BTN_LOGIN: '#SubmitLogin',
        MY_ACCOUNT_TITLE: '.page-heading',
        ERROR_MESSAGE: '#center_column'
    },
    MY_ACCOUNT: {
        HOME_BTN_LOGIN: '.login',
        HEADER_MENU: '.sf-menu',
        BLOUSE_OPTION: ':nth-child(2) > .product-container > .left-block > .product-image-container',
        CHANGE_COLOR: '#color_to_pick_list > :nth-child(1)',
        ADD_MORE: '.icon-plus',
        ADD_TO_CART: '#add_to_cart > .exclusive'

    }
}

export default locators;