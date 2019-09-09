import Bar from "../components/Bar";

describe("Bar Component", () => {
  let wrapper, consoleError;

  beforeEach(() => {
    wrapper = shallow(<Bar />);
    consoleError = console.error;
    console.error = jest.spyOn(console, "error");
  });

  afterEach(() => {
    console.error = consoleError;
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays correct value", () => {
    const data = 45;
    wrapper = shallow(<Bar data={data} />);
    expect(wrapper.find(".bar-value").text()).toEqual(String(data));
  });

  it("displays correct label", () => {
    const label = "Some label";
    wrapper = shallow(<Bar label={label} />);
    expect(wrapper.find(".bar-label").text()).toEqual(label);
  });
});
