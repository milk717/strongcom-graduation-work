export const pageList = [
    {bottomId: 0, text: '홈', pathname: '/home'},
    {bottomId: 1, text: '리스트', pathname: '/list'},
    {bottomId: 3, text: '설정', pathname: '/setting'},
    {bottomId: 0, text: '홈', pathname: '/'},
]

export const settingList = [
    {
        key: 0,
        menuName: '계정 관리',
        subMenu: [
            {key: 10, menuName: '비밀번호 관리'},
            {key: 11, menuName: '로그아웃'},
            {key: 12, menuName: '회원 탈퇴'}
        ]
    },
    {key: 1, menuName: '그룹 관리'},
    {key: 2, menuName: '알림 설정'},
    {key: 3, menuName: '도움말'},
    {key: 4, menuName: '오픈소스 라이센스'},
]