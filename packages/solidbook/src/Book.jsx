import getStories from "./getStories.js";

const Story = ({ title, component, raw }) => (
  <div>
    <h1>📝 {title}</h1>
    <Dynamic component={component} />
    <pre>{raw}</pre>
  </div>
);

export default () => {
  const stories = getStories();
  return (
    <>
      <For each={stories} fallback={<div>Loading stories...</div>}>
        {(story) => <Story {...story} />}
      </For>
    </>
  );
};
