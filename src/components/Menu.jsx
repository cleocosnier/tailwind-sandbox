const Menu = ({ leState }) => {
  return (
    <div className="">
      <ul className="flex">
        {leState.itemsMenu.map((item, index) => {
          return (
            <li
              key={index}
              className="px-4 text-white hover:text-primary font-bold"
            >
              <a href={item.url}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
