import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

  // ページ遷移後トップに移動
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return null
}
export default ScrollToTop
