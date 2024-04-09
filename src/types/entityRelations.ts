import { Prisma } from "@prisma/client";

export type PostWithTagsAndUser = Prisma.PostGetPayload<{
  include: { tags: true; user: { select: { name: true; user_pic: true } } };
}>;

export type FormWithFields = Prisma.FormGetPayload<{
  include: { fields: { include: { options: true } } };
}>;

export type FieldsWithOptions = Prisma.FieldGetPayload<{
  include: { options: true };
}>;

export type FormWithFieldsAndUser = Prisma.FormGetPayload<{
  include: {
    fields: { include: { options: true } };
    user: { select: { name: true } };
    _count: { select: { submissions: true } };
  };
}>;

export type SubmissionWithFormAndFields = Prisma.SubmissionGetPayload<{
  include: {
    fields: true;
    form: { include: { fields: { include: { options: true } } } };
  };
}>;

export type LinkWithCountAndUser = Prisma.Link_ShortenerGetPayload<{
  include: {
    user: { select: { name: true } };
    count: { select: { click_count: true } };
  };
}>;
