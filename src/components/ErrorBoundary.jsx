import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Canvas error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div>⚠️ 3D scene failed to load.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
