import Grid from "../components/Grid";

describe("Grid Component", () => {
  let wrapper, consoleError;

  beforeEach(() => {
    wrapper = shallow(<Grid />);
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

  it("displays correct number of grid lines", () => {
    const sample = require("../constants/data.json");
    const step = 10;
    const maxStep = Math.ceil(sample.data.reduce((r, d) => (r < d ? d : r), 0) / 10) * 10;

    wrapper = mount(<Grid maxStep={maxStep} start={0} step={step} />);
    expect(wrapper.find(".grid-line")).toHaveLength(maxStep / step + 1);
  });
});
