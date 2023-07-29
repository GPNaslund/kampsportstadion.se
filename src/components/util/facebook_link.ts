const FacebookLink = (username: string): string => {
    let href: string; 
    if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.canShare === 'function') {
      href = `facebook://user?username=${username}`;
    } else {
      href = `https://www.facebook.com/${username}`;
    }
    return href;
  }
  
  export default FacebookLink;