export const PAGE_DATA = {
  page: {
    home: {
      sectionOne: {
        title: "Tax Services in Ocean & Hudson County NJ",
        subTitle:
          "Welcome to MJR Group, where financial peace of mind begins. Our team of seasoned professionals, holding both Enrolled Agent and CPA certifications, are here to navigate the complexities of your finances, so you can focus on what matters most to you.",
      },
      sectionTwo: {
        title: "Accounting Services Tailored To You",
        subTitle:
          "We're more than just accountants; we're your dedicated partners in prosperity. Let's build a brighter financial future together. Need help with tax prep? Trust our expertise. Facing IRS issues? We're your dedicated representatives. Seeking mastery in QuickBooks? Count on us for professional guidance.",
        imageSrc:
          "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      sectionThree: {
        title: "Our Clients Speak",
        subTitle: "We have been working with clients around the world",
        clients: [
          {
            name: "Dana Mabey",
            imageSrc: "/clients/dana.png",
            quote: {
              body: "Tom was very fast, efficient and affordable. I called Tom, sent him our info via email and he filed and sent our taxes in. I have been to big chains in the past and have been there for hours.. Tom is now my new accountant!! I highly recommend him!!!",
            },
          },
          {
            name: "Bill Mecca",
            imageSrc: "/clients/bill.png",
            quote: {
              body: "I have used Tom Ruddy for my personal and business taxes for years. Always friendly, fast turnaround and accurate. What more can you ask for in a CPA?",
            },
          },
          {
            name: "Lauren Nespoli",
            imageSrc: "/clients/lauren.png",
            quote: {
              body: "Tom has been my personal accountant for years. He is quick, professional, and has made my somewhat complicated taxes a breeze for me! Taxes are no longer stressful. I would HIGHLY recommend him to anyone. A pleasure to work with.",
            },
          },
        ],
      },
    },
    taxPreparation: {
      individual: {
        sectionOne: {
          title: "Individual Taxes",
          imageFile: "/services/tax-return.png",
          body: "Tax preparation isn't just about numbers; it's about people. We understand that your financial life is as unique as you are, which is why our individual tax preparation services go far beyond the standard corporate tax experience. Whether you're a real estate rental owner, a multi-state earner, or self-employed, we're here to offer you a more personalized and caring touch. We're not just accountants, we're your financial allies.",
        },
        additionalSections: [
          {
            title: "Our Clientele",
            body: `The clients we serve are as diverse as the financial landscapes they navigate and we understand that every individual has distinct financial needs. No matter your situation, we're dedicated to helping you achieve financial success with our tailored approach.
            `,
            sections: [
              {
                title: "Real Estate Rental Owners",
                body: "Whether you're contemplating flipping property or pursuing long-term rental income, our tax preparers provide insights into capital improvements, management expenses, and tax implications to help you make informed decisions.",
              },
              {
                title: "Multistate Earners",
                body: "For those with income spanning multiple states or countries, our experts conduct in-depth research on treaties and reciprocity agreements to prevent double taxation, ensuring your financial affairs remain streamlined and efficient.",
              },
              {
                title: "Self Employed",
                body: "Small business owners benefit from our expertise in maximizing deductions while adhering to IRS guidelines. We not only prepare your return but also assist in future tax planning, ensuring your business takes full advantage of available tax breaks and credits.",
              },
              {
                title: "Expats",
                body: "Navigating foreign income and international tax regulations can be a daunting task for expatriates. We specialize in helping expats streamline their tax filings while ensuring compliance with the intricate web of global financial laws.",
              },
              {
                title: "Nonresidents",
                body: "Our team understands the complexities involved in earning income in the U.S. as a non-resident, whether you're here on a visa or conducting business. We'll guide you through the intricacies of reporting your income to both U.S. and your home country's tax authorities.",
              },
              {
                title: "Day Traders",
                body: "Our experienced accountants help day traders navigate the complexities of Mark-to-Market accounting, ensuring accurate reporting of gains and losses. We offer expert guidance on making the right elections and providing comprehensive financial disclosures to optimize your tax strategy.",
              },
            ],
          },
        ],
      },
      business: {
        sectionOne: {
          title: "Small Business Taxes",
          imageFile: "/services/tax-return.png",
          body: "Owning a small business comes with its unique challenges and joys. We understand the importance of keeping financial matters in order. One key part of this is dealing with taxes. We focus on assisting small business owners like you in managing their taxes without the stress. With this guide, we simplify small business tax essentials, providing you with the information and tools you need to make smart financial decisions and ensure your business's success",
        },
      },
    },
    irsRepresentation: {
      sectionOne: {
        title: "IRS Representation",
        imageFile: "/services/irs-audit.png",
        body: "Dealing with the IRS can be tough, an Enrolled Agent is specialized in dealing with the IRS and helping individuals with their tax conflicts. Whether you're dealing with an IRS audit, looking into installment agreements, or considering an Offer in Compromise, our services are designed to assist you. We'll simplify the IRS representation process and offer you the expertise you need to handle your tax issues.",
      },
      additionalSections: [
        {
          title: "IRS Installment Agreements",
          body: `Owing the IRS is stressful, but the good thing is they assess your payments based on what you can afford. It's not about the total amount you owe, but your present financial situation. If you can't handle big monthly payments, the IRS won't demand them. If you need assistance with your IRS tax debt, reach to explore payment choices.`,
        },
        {
          title: "IRS Offer in Compromise",
          body: `Sometimes, the IRS debt becomes unmanageable and might not ever be fully paid off. In such situations, the IRS can consider settling the tax liability. However, be cautious of tax resolution firms that promise instant debt settlement without understanding the process. The IRS offer in compromise program is a formal and complex procedure, with over half of the submitted offers getting rejected. We have a higher success rate due to our experience and honesty. We only pursue offers in compromise when we genuinely believe they have a strong chance of being accepted.`,
        },
        {
          title: "IRS Audits",
          body: `Audits can be one of the most stressful tax issues to deal with because they're often unfamiliar. However, with the Enrolled Agent expertise, we've handled various audits, from small business checks to complex cases involving substantial amounts. We can offer you a straightforward overview of the audit process and what to expect.`,
        },
      ],
    },
    businessConsultation: {
      sectionOne: {
        title: "Business Consultation",
        imageFile: "/services/business.png",
        body: "Running a small business comes with financial challenges, and we're here to lend a hand. Whether you're starting a business, need bookkeeping assistance, require help with payroll, or managing sales tax, our consultation service has got your back. Our aim is to make things easier for you and guide you through the financial side of things. In this guide, we'll cover the services we offer to make your small business run smoother and stay on top of financial regulations.",
      },
      additionalSections: [
        {
          title: "Business Consulting Services",
          body: ``,
          sections: [
            {
              title: "Bookkeeping",
              body: "Is your QuickBooks a mess? Our certified bookkeeper can help. They'll set up, repair, and keep your accounting software in order, whether you use the online or desktop versions. Our QuickBooks ProAdvisor will handle your expenses, reconcile your accounts, and update your bookkeeping files.",
            },
            {
              title: "Sales Tax Filing",
              body: "If you're unsure about which products or services require sales tax, we're here to help. We'll simplify the sales tax laws and rules for you. Additionally, you can rely on us to handle your monthly deposits and quarterly filings, ensuring they're done on time to avoid costly penalties.",
            },
            {
              title: "Business Formation",
              body: "Let us kickstart your business by helping you incorporate. Unlike DIY websites, we're local accountants who register your business and assist in choosing the right business structure. Rely on licensed professionals to set up your business entity and prevent expensive fines and fees.",
            },
            {
              title: "Payroll Services",
              body: "We offer reliable payroll services that cover quarterly filings and on-time deposits, all at a fraction of the cost.",
            },
          ],
        },
      ],
    },
    quickBooksTraining: {
      sectionOne: {
        title: "Free QuickBooks Training",
        imageFile: "/services/bookkeeping.png",
        body: "We're here to help small businesses with free QuickBooks training. We understand the importance of keeping your financial records organized for tax time. In this program, we'll show you how to use QuickBooks to make your financial management easier. Join us, and we'll help you take control of your business finances for a smooth tax season.",
      },
    },
    about: {
      title: "About MJR Group",
      sectionOne: {
        imageSrc: "/logo/logo.png",
        body: `
        MJR Group was founded by Matt Ruddy, an Enrolled Agent (EA), who launched the company as a tax firm specializing primarily in tax representation. Matt's expertise in taxation was cultivated during his early career while working alongside his father, Tom Ruddy, a well-established Certified Public Accountant (CPA) who operates his own tax firm TRCPA located in Toms River, NJ and primarily focuses on tax preparation.
        <br/>
        <br/>
        TRCPA & MJR Group decided to form a partnership, expanding the company's services to include both tax representation and tax preparation. This partnership brought together a wealth of experience, enhancing the business's ability to provide comprehensive solutions to individuals and businesses, tailored to their unique tax and financial requirements.
        `,
      },
      sectionTwo: {
        title: "Mission",
        body: `
        Our mission is to help people and businesses with their taxes, making it simple and accurate. We want to build trust and long-lasting relationships by giving expert advice to minimize taxes and follow the rules.
        `,
      },
    },
  },
};
