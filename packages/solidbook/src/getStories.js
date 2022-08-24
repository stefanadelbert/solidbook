export default () => {
  const modules = import.meta.glob("/**/*.story.jsx", { eager: true });
  const modules_raw = import.meta.glob("/**/*.story.jsx", {
    eager: true,
    as: "raw",
  });
  const stories = Object.keys(modules).map((key) => {
    return {
      id: key,
      title: modules[key].title,
      component: modules[key].default,
      raw: modules_raw[key],
    };
  });
  return stories;
};
