const AuthLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f3ee]">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#3b2f2f]">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
