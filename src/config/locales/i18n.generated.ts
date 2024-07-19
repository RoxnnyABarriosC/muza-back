/* DO NOT EDIT, file generated by nestjs-i18n */

import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "exceptions": {
        "shared": {
            "notFound": string;
            "badRequest": string;
            "forbidden": string;
        };
        "common": {
            "uniqueAttribute": string;
            "uniqueAttributes": string;
        };
        "auth": {
            "badCredentials": string;
            "permissionsRequired": string;
            "superAdminOnly": string;
            "invalidConfirmationToken": string;
        };
    };
    "messages": {
        "user": {
            "enabled": string;
            "disabled": string;
            "verify": string;
            "unverify": string;
            "resetPassword": string;
            "unsetBanner": string;
            "unsetMainPicture": string;
        };
        "role": {
            "notAllowedRemoveASystemRol": string;
            "enabled": string;
            "disabled": string;
            "permissionsUpdated": string;
            "allowedViewsUpdated": string;
            "scopeConfigUpdated": string;
            "notFoundOrDisabledRol": string;
            "syncPermissions": string;
        };
        "auth": {
            "logout": string;
            "changeMyPassword": string;
            "register": string;
            "invalidConfirmationToken": string;
            "activatedAccount": string;
            "disabledUser": string;
            "forgotPassword": string;
            "changeForgotPassword": string;
            "resetPassword": string;
        };
    };
};
export type I18nPath = Path<I18nTranslations>;