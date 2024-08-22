# TAC Lite (Taxonomy Access Control Lite)

This module grants access so that some users may see content that is
hidden from others.  A simple scheme based on taxonomy, roles and
users controls which content is hidden.

Like all modules which use Backdrop's built-in
`node_access` features, this module does not prevent users from
viewing/editing nodes which Backdrop's permission allow them to
view/edit. To use, configure Backdrop not to grant the permission, then
configure `tac_lite` to grant it.

As the name implies, this module shares some functionality with another module
called [Taxonomy Access Control (TAC)](https://backdropcms.org/project/taxonomy_access).  If you are
shopping around for an access control module to use, consider that one
as you may find that it suits your needs.  This module exists to provide access
control without some of the additional complexity introduced by TAC and more flexibility in granting access on a per-user basis.

## Features

Here are some key features of `tac_lite`:

* Designed to be as simple as possible in installation and administration.

* Uses Backdrop's node_access hooks and taxonomy module to leave the
  smallest possible footprint while doing it's job.  For example, it
  introduces no new database tables.

* Grant permissions based on roles.

* Grant permissions per user.  (Give a specific user access beyond
  what his/her roles allow).

* Supports view, update and delete permissions.

### Example Use Case: Website to track and share work projects

My website helps me manage my work projects.  I use Backdrop's project
module to track issues.  Some of my projects are for the public to see
(i.e. Backdrop modules) others are limited to my clients and partners.
These restricted projects should be visible only to me, the client in
question, and partner(s) working on that particular project.

I've defined a vocabulary for my projects (same one used by
project.module) and I've defined a client role and a partner role.
Partners can contribute to the website, while clients can read content
but post only issues.

Using TAC (or as far as I know all other access control modules) I
would have to create a new role for each project/role combination.
That is, for the Acme project I'd have to create roles 'Acme Client'
and 'Acme Partner' in order to assign permissions just the way I want
them.

Using `tac_lite`, I simply associate each user with the project(s) they
are allowed to see.  That is, I associate some clients and some
partners with Acme.  Their role (client or partner) controls what they
can do, and the associations through `tac_lite` control what they can
see.

## Installation and Usage

- Install this module using the [official Backdrop CMS instructions](https://backdropcms.org/guide/modules)
- Log in as an admin (uid==1, or a user with `administer_tac_lite` permission)
- Create a vocabulary which you will use to categorize private nodes.
  You may want to create a vocabulary called "Privacy" with terms like
  "public", "private", and "administers only".
- Associate the vocabulary with node types, as you would normally do.
- Go to **administer >> user management >> access control >> access
  control by taxonomy**.
- Select the category you created in the earlier step (e.g. "Privacy").
- Create some content.  Choose a node type you've associated with "Privacy".
- Note that you can view the content you just created.  Other users cannot.
- Edit the account of another user.  Go to the `tac_lite` access tab under edit.
- Select a term you selected when creating the node and submit changes.
- Now the user can also access the node you created.

### Notes

If behavior of this or any other access control module seems to be
incorrect, try rebuilding the node access table. This may be done
under **administer >> content management >> post settings**.  There is a
button there labelled "rebuild permissions".

Another useful tool is a sub-module of the `devel` module, called
`devel_node_access` which can give you some insight into the contents of
your node_access table.  Recommended for troubleshooting.

## Issues

 - Bugs and Feature requests should be reported in the [Issue Queue](https://github.com/backdrop-contrib/tac_lite/issues).

## Current Maintainers

 - [Laryn Kragt Bakker](https://github.com/laryn).
 - Collaboration and co-maintainers welcome!

## Credits

 - Ported to Backdrop CMS by [Laryn Kragt Bakker](https://github.com/laryn).
 - Current development is supported by [Aten Design Group](https://aten.io).
 - Maintained for Drupal by [grndlvl](https://www.drupal.org/u/grndlvl),
   [jenlampton](https://www.drupal.org/u/jenlampton),
   [ikit-claw](https://www.drupal.org/u/ikit-claw), and
   [Dave Cohen](https://www.drupal.org/u/dave-cohen).
 - Created for Drupal by [Dave Cohen](https://www.drupal.org/u/dave-cohen).

## License

This project is GPL v2+ software. See the LICENSE.txt file in this directory for
complete text.
