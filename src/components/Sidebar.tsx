import AddTodoForm from "./AddTodoForm";
import CustomButton from "./CustomButton";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Sidebar() {
  const { login, register, isAuthenticated, logout, user, isLoading } = useKindeAuth();
  return (
    <section className="md:col-span-1 bg-white p-4 md:p-6 rounded-xxl md:rounded-s-xl flex flex-col justify-between">
      {/* Content for the section */}
      <AddTodoForm />
      <div className="mt-4 gap-2 flex flex-col">
        {/* Conditional rendering */}
        {isLoading ? null : isAuthenticated ? (

          <>
          <p>Hi {user?.given_name}</p>
          <CustomButton
            title="Logout"
            handlePress={() => logout()}
            containerStyles="bg-[#717082] text-white py-2 px-4 rounded w-full hover:bg-[#5f6771]"
          />
          </>
        ) : (
          <>
            <CustomButton
              title="Login"
              handlePress={() => login()}
              containerStyles="bg-[#717082] text-white py-2 px-4 rounded w-full hover:bg-[#5f6771]"
            />
            <CustomButton
              title="Register"
              handlePress={() => register()}
              containerStyles="bg-[#717082] text-white py-2 px-4 rounded w-full hover:bg-[#5f6771]"
            />
          </>
        )}
        {/* Conditional rendering */}

        {/* <CustomButton
          title="Login"
          handlePress={() => login()}
          containerStyles="bg-[#717082] text-white py-2 px-4 rounded w-full hover:bg-[#5f6771]"
        />
        <CustomButton
          title="Register"
          handlePress={() => register()}
          containerStyles="bg-[#717082] text-white py-2 px-4 rounded w-full hover:bg-[#5f6771]"
        /> */}
      </div>
    </section>
  );
}
