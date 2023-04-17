import React from "react";

interface IProps {
  count: number;
}

export class PersonExample1 extends React.Component<IProps, IProps> {
  state: IProps = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("First mount");
  }

  updateAmount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>

        <button onClick={() => this.updateAmount()}>Click-me</button>
      </div>
    );
  }
}
