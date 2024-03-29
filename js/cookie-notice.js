import { getCookie, setCookieExpirationNever } from './util/functions';

(() => {
    const cookieNoticeAlert = document.getElementById('cookieNotice');
    const cookieNoticeName = 'accepted_cookie_notice';

    if (cookieNoticeAlert) {
        if (!getCookie(cookieNoticeName)) {
            cookieNoticeAlert.classList.remove('d-none');
        }

        cookieNoticeAlert.querySelectorAll('button').forEach(el => {
            el.addEventListener('click', () => {
                document.cookie = `${cookieNoticeName}=true;${setCookieExpirationNever()}path=/;`;
            }, false);
        });
    }
})();
