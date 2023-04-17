import React from "react";

interface IAppTestProps {
  name: string;
}

interface IStateProps {
  count: number;
}

export class ClassComponentPerson extends React.Component<
  IAppTestProps,
  IStateProps
> {
  state = { count: 0 };
  constructor(props: IAppTestProps) {
    super(props);
  }
  componentDidMount(): void {
    console.log("Print this prop ", this.props.name);
  }
  updateAmount() {
    this.setState((old) => ({
      count: old.count + 1,
    }));
  }
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <button onClick={this.updateAmount}>
          Update amount: {this.state.count}
        </button>
      </>
    );
  }
}
