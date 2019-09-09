import BarChart from "../components/BarChart";
import Bar from "../components/Bar";
import Grid from "../components/Grid";

describe("BarChart Component", () => {
  let wrapper, consoleError;

  beforeEach(() => {
    wrapper = shallow(<BarChart />);
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

  it("displays correct number of Bar components", () => {
    const sample = require("../constants/data.json");
    wrapper = shallow(<BarChart data={sample.data} labels={sample.labels} />);
    expect(wrapper.find(Bar)).toHaveLength(sample.data.length);
  });

  it("displays a Grid component", () => {
    const sample = require("../constants/data.json");
    wrapper = shallow(<BarChart data={sample.data} labels={sample.labels} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
  });
});
