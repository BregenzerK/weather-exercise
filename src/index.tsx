/* @jsx h */
import { h, Component, State, Host } from "@stencil/core";

@Component({
  tag: "my-weather",
  styleUrl: "index.css",
  shadow: true,
})
export class MyWeather {
  @State() count: number = 0;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return [
      <span>{this.count}</span>,

        <limel-icon-button
                icon="snowflake"
                disabled={false}
                onClick={this.inc.bind(this)}
            />

    ];
  }
}
