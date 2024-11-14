const locators = {
    HOME: {
        HOME_BTN_LOGIN: '.login',
    },
    LOGIN: {
        EMAIL_ADDRESS: '#email',
        PASSWORD: '#passwd',
        BTN_LOGIN: '#SubmitLogin',
        ERROR_MESSAGE: '#center_column'
    },
    MY_ACCOUNT: {
        MY_ACCOUNT_TITLE: '.page-heading',
        HEADER_MENU: '.sf-menu',
        BLOUSE_OPTION: ':nth-child(2) > .product-container > .left-block > .product-image-container',
        CHANGE_COLOR: '#color_to_pick_list > :nth-child(1)',
        ADD_MORE: '.icon-plus',
        ADD_TO_CART: '#add_to_cart > .exclusive',
        BTN_ACCESS_TO_CART: '.button-medium > span'
    },
    STEPS_TO_PURCHASE: {
        BTN_PROCEED_TO_CHECKOUT: '.cart_navigation > .button > span',
        ACCEPT_TERMS: '#cgv',
        CARD_PAYMENT: '.bankwire',
        BANK_SLIP_PAYMENT: '.cheque',
        BTN_CONFIRM_ORDER: '#cart_navigation > .button > span',
        ORDER_INFORMATION: '.box',
        BTN_VIEW_HISTORY: '.button-exclusive'
    },
    ORDER_HISTORY: {
        ORDER_REFERENCE: '#order-list'
    }
}

export default locators;