const Option = (props) => {
  return (
    <div className="flex p-2">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h5 className="text-clip text-white" style={{ marginRight: 12 }}>
            {props.title}
          </h5>
        </div>
        <div class="col-span-1">
          <input
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            className="w-64 rounded-md bg-gray-600 p-2"
            onChange={props.onChange.bind(this)}
          />
        </div>
      </div>
    </div>
  );
};

export default Option;
