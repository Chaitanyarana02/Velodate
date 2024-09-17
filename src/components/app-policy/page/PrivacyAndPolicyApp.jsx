const PrivacyAndPolicyApp = () => {
  return (
    <>
      <div className="w-full md:px-24  lg:px-[200px] text-white z-[0]   ">
        
        <h1 className="   text-[2rem] md:text-[3rem] leading-10 mt-[20%] md:mt-[5%]  font-[700] pb-[5%] pt-[5%]  flex flex-col items-center justify-center w-full ">Privacy Policy</h1>
        <div className=" relative">
        {/* terms discription */}

        <div className="my-5   text-base  px-3  lg:p-0  ">
          <h5 className="py-0 px-3 text-sm lg:p-0">Last updated: March 26, 2024 12:00 PM</h5>
          <p className=" tracking-wide flex text-left   my-4  font-[500]">Please read this Terms of Service ("Terms," "Terms of Service") carefully before using the Velodate App (the "Application") 
          operated by Velodate, Inc., a Delaware Corporation formed in, Delaware, United States ("us," "we," "our") as this Terms of  Service contains important information regarding 
          limitations of our liability. </p>
          <p className=" tracking-wide flex text-left font-[500]  my-4">
            Your access to and use of this Application is conditional upon your acceptance of and compliance with these Terms. These Terms apply to everyone,
             including but not limited to visitors, users and others, who wish to access and use the  Application.
          </p>
          <p className=" tracking-wide flex text-left font-[500]  my-4">
            By accessing or using the Application, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you do not have 
            our permission to access or use the Application.
          </p>
        </div>
      
        {/* Account discription */}
        <div className="lg:mt-[3%]  md:px-0 text-base px-3 pt-5   lg:p-0  ">
              <h1 className=" p-0 md:p-1 text-3xl px-3 lg:p-0 ">What Information We Collect</h1>
            <div className="my-3 w-full   ">
              <p className=" tracking-wide flex text-left font-[500]  my-4">When you create an account on our Application, you guarantee that you are 18 
              We collect any and all information that you enter on this Application. We collect the following information about you:  </p>

              <div className=" overflow-x-auto">
      <table className="min-w-full bg-black text-white border border-gray-400">
        <thead className="bg-[#191919]">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-gray-400">
              Category of information
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Specific piece of information
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Identifying information</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Name</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Identifying information</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Phone number</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Identifying information</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Account name</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Identifying information</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">City</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Identifying information</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Location</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Identifying information</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Email Address</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Characteristics of protected classifications</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Age</div>
            </td>
          </tr><tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Characteristics of protected classifications</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Sex</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">
              <div className="text-sm font-medium">Sensitive Personal information</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">Geolocation Information</div>
            </td>
          </tr>
          {/* Add more rows for each piece of information */}
        </tbody>
      </table>
    </div>

            </div>
        </div>


         {/* Account discription */}

        <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0 ">
              <h1 className=" p-0 md:p-1 text-3xl px-3 lg:p-0 ">How We May Use Your Information</h1>
            <div className="my-3 w-full   text-base px-3 lg:p-0  ">
              <p className=" tracking-wide flex text-left font-[500]  my-4">We may use the information that you provide us for the following:</p> 
            </div>
            <ul className="list-disc pl-6 mt-4 font-[500]">
              <li className="my-2">Analytics;</li>
              <li className="my-2">Auditing compliance;</li>
              <li className="my-2">Creating new features;</li>
              <li className="my-2">Detecting security incidents;</li>
              <li className="my-2">Enforcing our Terms of Service;</li>
              <li className="my-2">Marketing and advertising;</li>
              <li className="my-2">Performing services;</li>
              <li className="my-2">Protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for such activities;</li>
              <li className="my-2">Providing customer service;</li>
              <li className="my-2">Targeted advertising;</li>
              <li className="my-2">Undertaking activities to verify or maintain the quality or safety of our services or devices;</li>
              <li className="my-2">Undertaking internal research for technological development and demonstration;</li>
              <li className="my-2">Verifying customer information.</li>
            </ul>
        </div>
        
         {/* Account discription */}

         <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0 "> 
         <h1 className=" p-0 md:p-1 text-3xl px-3 lg:p-0 ">With Whom We Share Your Personal Information</h1>
         <p className=" tracking-wide flex text-left font-[500]  my-4">
         We do not share your personal information with any third parties.</p>
         </div>

         <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0 ">
              <h1 className=" p-0 md:p-1 text-3xl px-3 lg:p-0 ">How We Protect Your Information</h1>
              <p className=" tracking-wide flex text-left font-[500]  my-4">
              We have implemented the following measures to protect and safeguard your personal information:</p>
              <div className="">
              <ul className="list-disc">
                <li className="py-2 ml-5">Limiting the amount of personal information that we collect to the extent that it is strictly necessary;</li>
                <li className="py-2 ml-5">Using comprehensive physical, technical and administrative security methods;</li>
                <li className="py-2 ml-5">Using Secure Socket Layer (“SSL”) or other secure connection technologies when receiving or sending personal information <br/> beyond internal networks;</li>
                <li className="py-2 ml-5">Having comprehensive security policies and procedures.</li>
              </ul>
            </div>

                {/* Indemnity discription */}
                <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Sale Of Your Information</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        We do not sell your personal information.
        </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Information Retention</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
            We retain all of the information that we collect until you delete your account from the Application.
        </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Information Deletion</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
            We will delete all of the information that we collect immediately upon you deleting your account from the Application.
        </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">User Content</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        Some features of the Application may include a functionality enabling you to post user content, whether publicly posted or privately transmitted, such as profiles, posts, feedback, experiences, suggestions, notes, messages, photos, live location and videos (“User Content”) that may be made available to us and other users of the Application.
        </p>
        <p className="tracking-wide flex text-left font-[500] my-4">
        You should be aware that any User Content you provide or post in the public forums of the Application may be read, collected, and used by others who access them, and we have no control over them. Please exercise caution before and when you choose to share personal information on such public forums.</p>
        <p className="tracking-wide flex text-left font-[500] my-4">
        All User Content privately transmitted between you and other users, including but not limited to chats, photographs, videos, live location sharing shall be done voluntarily and with mutual consent between the users. If you choose to share your live location to another user, you should be aware that we do not automatically capture and store geo locations through the Application, unless such information has been shared and stored by you on your own accord. </p>
        <p className="tracking-wide flex text-left font-[500] my-4">
        Velodate, Inc. at its sole discretion, has the right (but not the obligation) to screen, reject, retain, or remove any User Content on the Application that violates our Terms and this Privacy Policy, or is otherwise objectionable.  </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Information Security</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        You acknowledge and agree that protecting your personal information is a responsibility shared between you and us. In this regard, we ask you to be responsible for keeping your login IDs, passwords, and other authentication information used to access the Application in a secure manner and maintain strict confidentiality. You should not share your account and authentication information with any third parties and should inform us immediately of any prohibited use of your account or authentication information. Velodate, Inc. cannot secure and assumes no liability for personal information that is released by you to other users of the Application. </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Account Closure</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        To delete the account you need to open the app, go to profile settings and click "Delete Account" button.  </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Lawful Disclosure</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        We may be required to disclose personal information pursuant to lawful requests made by public authorities, including to meet national security or law enforcement requirements, in compliance or pursuant to a warrant or court order. If such request has been made to us, we will ensure to reasonably notify you of such request. </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Cookies</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        A cookie is a small piece of data sent from an application and stored on your device by your browser. Cookies are generally used to allow applications to respond to you as an individual, to remember your preferences, to test content, and to analyze your interactions with Applications or with advertisements. This Application does not collect cookies. </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Children's Privacy</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        This Application is intended for use by a general audience and does not offer services to children. Should a child whom we know to be under 18 send personal information to us, we will use that information only to respond to that child to inform him or her that they cannot use this Application.

</p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Analytics Programs</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        This Application uses Google Analytics to collect information about you and your behaviors. If you would like to opt out of Google Analytics, please visit https://tools.google.com/dlpage/gaoptout/ </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Location Of Data Processing</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        All data processing activities undertaken by us take place in United States. </p>
    </div>
    <div className="lg:mt-[3%] md:px-0 text-base px-3 pt-5 lg:p-0 ">
    <h1 className="p-0 md:p-1 text-3xl px-3 lg:p-0 ">Your Rights</h1>
    <ul className="list-disc">
        <li className="py-2 ml-5">The right to access the personal information that we have collected about you.</li>
        <li className="py-2 ml-5">The right to say no to the sale of your personal information.</li>
        <li className="py-2 ml-5">The right to request that we delete all or some of the personal information that we have collected on you.</li>
        <li className="py-2 ml-5">The right to ask us to transmit your personal information that we have collected on you to another provider (where technically feasible).</li>
        <li className="py-2 ml-5">The right to request that we amend any of the information that we have collected about you.</li>
        <li className="py-2 ml-5">The right to withdraw your consent to the processing of your data.</li>
        <li className="py-2 ml-5">The right to request that we restrict the processing of your data.</li>
        <li className="py-2 ml-5">The right to lodge a complaint regarding our collection, sharing, and processing of data with competent authorities in the proper jurisdiction.</li>
    </ul>
</div>


    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Exercising Your Rights</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        You may exercise the rights specified above by submitting a consumer request to:
        </p>
        <div className="flex flex-col text-left font-medium my-4">
                  <p className="py-1">Velodate, Inc.</p>
                  <p className="py-1">Chetan Soni </p>
                  <p className="py-1">President </p>
                  <p className="py-1">
                    &nbsp;{" "}
                    <span className="text-[#D8A409] underline">
                      {" "}
                      <a href="mailto:support@velodate.com">
                        {" "}
                        support@velodate.com
                      </a>
                    </span>
                  </p>
                  <p className="py-1">8, The Green, STE B,</p>
                  <p className="py-1">Dover,</p>
                  <p className="py-1">DE, 19901</p>
                  <p className="py-1">UNITED STATES</p>

                  <p className="py-1">
                  We will need to verify your identity prior to effectuating your request. To verify your identity, you will need to provide us with the following information with your request:
                  </p>

                  <ul>
                    <li>Full Name or Username</li>
                    <li>Email Address</li>
                  </ul>

                  <p className="py-1">
                  Please note that we may be unable to process your request if you do not provide us with the above information. </p>  

                  <p className="py-1">
                  We will respond to most consumer requests within 30 to 45 days of receipt, depending upon where you reside. However, some requests may take longer. We will notify you in writing if we need more time to respond. We have the ability to deny your request(s) if certain exceptions in the law apply. If we do deny your request, we will provide you with the reasons for such denial.
                  </p> 

                </div>



    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Accountability</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        The following person is accountable and responsible for our privacy practices and procedures: Velodate Privacy Officer
        </p>
        <p className="tracking-wide flex text-left font-[500] my-4">
        You may lodge a complaint with us by contacting the person accountable and responsible for our privacy practices and procedures at the contact information above.</p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Third-Party Websites</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        This Application may contain hyperlinks to websites operated by parties other than us. We provide such hyperlinks for your reference only. We do not control such websites and are not responsible for their contents or the privacy or other practices of such websites. It is up to you to read and fully understand their Privacy Policies. Our inclusion of hyperlinks to such websites does not imply any endorsement of the material on such websites or any association with their operators. </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Do Not Track</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        Do Not Track is a preference you can set on your web browser to inform websites that you do not want to be tracked. We support Do Not Track ("DNT"). You can either enable or disable DNT by visiting the Preferences or Settings page of your browser. </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">VPN Usage</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        We do not allow accessing the Application through Virtual Private Networks (“VPN”). If you attempt to login to the Application using a VPN, we will automatically block your access from attempting to login to the Application.
        </p>
    </div>
    <div className="lg:mt-[3%]  md:px-0 text-base px-3  pt-5  lg:p-0">
        <h2 className="text-2xl mt-6">Changes to Privacy Policy</h2>
        <p className="tracking-wide flex text-left font-[500] my-4">
        We reserve the right to amend this Privacy Policy at any time. We will notify you of any changes to this Privacy Policy by posting the updated Privacy Policy to this website or application.
        </p>
    </div>


    <div className="lg:mt-[3%]  md:px-0 text-base px-3 pt-5   lg:p-0  ">
              <h1 className=" p-0 md:p-1 text-3xl px-3 lg:p-0 ">Questions </h1>
            <div className="my-3 w-full   ">
              <p className=" tracking-wide flex text-left font-[500] mb-10 w-full flex-col md:flex-row g-0  my-4">
              If you have any questions about our Terms of Service, please contact us at &nbsp; <span className="text-[#D8A409] underline">  <a href="mailto:support@velodate.com"> support@velodate.com</a></span>
               </p></div>
        </div>








       
        </div>






        </div>
        
      
      </div>
    </>
  );
};

export default PrivacyAndPolicyApp;
