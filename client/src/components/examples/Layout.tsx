import Layout from '../Layout';

export default function LayoutExample() {
  return (
    <Layout>
      <div className="py-16 text-center">
        <h1 className="text-4xl font-serif font-bold">Page Content Goes Here</h1>
        <p className="text-muted-foreground mt-4">This is wrapped in the Layout component</p>
      </div>
    </Layout>
  );
}
