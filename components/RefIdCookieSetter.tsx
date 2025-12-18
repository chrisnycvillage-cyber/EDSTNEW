'use client';

import { useEffect } from 'react';

function getQueryParam(param: string) {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get(param);
}

function getCookie(name: string) {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

export default function RefIdCookieSetter() {
  useEffect(() => {
    const refid = getQueryParam('refid');
    const existingSponsor = getCookie('sponsor');
    if (refid) {
      setCookie('sponsor', refid);
      return;
    }

    if (!existingSponsor) {
      setCookie('sponsor', 'EDST');
    }

  }, []);

  return null;
}

