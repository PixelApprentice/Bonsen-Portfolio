import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = "/";
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-background px-6">
                    <div className="max-w-md w-full text-center space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-foreground">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-muted-foreground">
                                We encountered an unexpected error. Please try refreshing the page.
                            </p>
                            <p className="text-xs text-muted-foreground/50 mt-2">Debug Mode: v2 - Logs Active</p>
                        </div>

                        {this.state.error && (
                            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-left overflow-auto max-h-[80vh]">
                                <p className="text-sm font-bold text-destructive mb-2">Debug Error Info:</p>
                                <p className="text-sm font-mono text-destructive break-all">
                                    {this.state.error.toString()}
                                </p>
                                <pre className="text-xs font-mono text-destructive/80 mt-2 whitespace-pre-wrap">
                                    {this.state.error.stack}
                                </pre>
                            </div>
                        )}

                        <button
                            onClick={this.handleReset}
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        >
                            Return to Home
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
