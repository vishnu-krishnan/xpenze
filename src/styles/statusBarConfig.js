export const statusBarConfig = (isDarkBackground) => ({
  translucent: false,
  animated: true,
  hidden: false,
  backgroundColor: isDarkBackground ? "black" : "white",
  barStyle: isDarkBackground ? "light-content" : "dark-content",
});
