import React from "react";

const Faqs = () => {
  return (
    <div className="sm:container mx-5 sm:mx-auto my-12">
      <h2 className="flex justify-center mb-10">
        <span className="text-[#4361EE] text-lg font-semibold rounded-full bg-[#4362ee25] py-2 px-6 border boder-[#4361EE]">
          FAQs
        </span>
      </h2>
      <div className="collapse collapse-arrow bg-linear-to-r from-[#480CA8] to-[#B5179E] border border-base-300 text-white p-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-bold">
          What is SkillCircle?
        </div>
        <div className="collapse-content text-sm">
          SkillCircle bridges the gap between traditional classroom education
          and the evolving demands of our modern world. The SkillCircle
          curriculum provides teens with accessible, engaging lessons that are
          relevant to the real world. These lessons teach the importance of
          life-long learning and equip learners with human skills such as
          recognizing their strengths and triggers, understanding their
          self-motivation, and discovering their purpose. By dedicating an hour
          each week to SkillCircle, learners will discover how to apply these
          crucial life skills in their everyday lives. The SkillCircle platform
          features video lessons, extra resources for those who want to dive
          deeper, and a space called LifeLens for learners to document their
          insights, thoughts, and new ideas. Also, adults have their own
          dashboard where they can monitor their learner's progress and see
          what's coming up next. Subscribers will gain access to new lessons
          each month and can always go back and revisit previous lessons. With
          SkillCircle, learners grow at their own pace. There's no need to race
          through the modules. In fact, we encourage learners to put more time
          into the lessons they're most interested in. Lifelong learning means
          revisiting and uncovering deeper insights over time—and that's what we
          teach at SkillCircle. Our mission is to empower teens with essential
          life skills so they can shape, not just adapt to, the future.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-linear-to-r from-[#480CA8] to-[#B5179E] border border-base-300 text-white p-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          Who should use SkillCircle?
        </div>
        <div className="collapse-content text-sm">
          SkillCircle is designed primarily for learners aged 13-18. But
          learners of all ages can benefit! We encourage parents and family
          members to follow along and engage with their learners on the lessons
          and concepts in each module.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-linear-to-r from-[#480CA8] to-[#B5179E] border border-base-300 text-white p-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          What are soft skills?
        </div>
        <div className="collapse-content text-sm">
          "Soft skills," "people skills," "human skills," or "EQ" all refer to
          people's ability to interact and relate to others. Unlike hard skills,
          which are specific tasks like accounting or computer coding, soft
          skills include things like empathy, communication, teamwork,
          problem-solving, and time management.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-linear-to-r from-[#480CA8] to-[#B5179E] border border-base-300 text-white p-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How does the subscription work?
        </div>
        <div className="collapse-content text-sm">
          Adults may register at SkillMateApp.com. Once registered, subscribers
          can invite up to four learners to join the learning platform.
          SkillMate offers a 30-day, risk-free trial. You won't be billed until
          after the trial ends and you may cancel at any time. If you choose the
          monthly option, you will be billed $30 every month after the trial
          ends. If you choose the annual plan, you will be billed $300 after the
          trial ends and then every year on your enrollment anniversary.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-linear-to-r from-[#480CA8] to-[#B5179E] border border-base-300 text-white p-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          What content is included in the subscription?
        </div>
        <div className="collapse-content text-sm">
          Each SkillCircle lesson guides learners in easy-to-understand ways.
          The lessons also encourage learners to apply what they're learning in
          their everyday life. While each module's ideas are approachable and
          understandable on their own, SkillMate's lessons are designed to build
          on previous modules. The first month is focused on "Living with
          Purpose" and, like every month, features a series of weekly videos to
          teach the concepts, provide real-world examples, and give guidance on
          how to integrate these concepts in daily life. There are also
          additional activities and related content in the LifeLens section. At
          the beginning of each monthly module, learners are given a short
          assessment. No studying is required—the assessment helps us tailor the
          content to your learner's current knowledge level. Depending on a
          learner's existing knowledge, they can start with the foundational
          content or jump straight to advanced lessons. All learners will have
          access to both the foundational and advanced content and lessons. All
          videos are available in both English and Spanish, and subtitles are
          available.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-linear-to-r from-[#480CA8] to-[#B5179E] border border-base-300 text-white p-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          Are the training materials age-appropriate?
        </div>
        <div className="collapse-content text-sm">
          The SkillMate curriculum was developed by Dr. Frank Houston, a Ph.D.
          college professor who was an early pioneer in online learning. Dr.
          Houston specializes in instructional design and leadership development
          and is also the father of two teens. As the learner's adult, you will
          have access to all your learner's video lessons. This allows you to
          review the content on your own, as well as facilitate conversations
          about these topics with your learners to support their progress.
        </div>
      </div>
    </div>
  );
};

export default Faqs;
