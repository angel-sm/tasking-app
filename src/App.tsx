import { Route } from "wouter";

import Home from "./presentation/pages/Home/Home";
import Layout from "./presentation/components/Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Route path="/" component={Home} />
    </Layout>
  );
}
