export interface IMenus {
    'path': string,
    'title': string,
    'icon': string,
    'header': string,
    'is_header': number,
    'auth'?: string[],
    'children'?: IMenus[]
}
export interface IUserInfo {
    'id': number,
    'account': string,
    'head_pic': string
}

export interface ILoginResponse {
        'token': string,
        'expires_time': number,
        'menus': IMenus[],
        'unique_auth': string[],
        'user_info': IUserInfo
        'logo': string,
        'logo_square': string,
        'version': string,
        'newOrderAudioLink': string
}
